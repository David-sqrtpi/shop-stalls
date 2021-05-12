package application.services;

import application.Repository.*;
import application.entity.Inventory;
import application.entity.Invoice;
import application.entity.InvoiceDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private InvoiceDetailRepository invoiceDetailRepository;

    @Autowired
    private InventoryRepository inventoryRepository;

    public void addProduct(long invoiceId, long productId, int quantity) {
        Invoice invoice = invoiceRepository.findById(invoiceId);
        Inventory inventory = inventoryRepository.findByProductBarcode(productId);
        InvoiceDetail invoiceDetail;

        if (!exists(invoiceId, productId)) {
            invoiceDetail = new InvoiceDetail(invoice, inventory.getProduct(), quantity);
        } else {
            invoiceDetail = invoiceDetailRepository.findByInvoiceIdAndProductId(invoiceId, productId);
            int newQuantity = invoiceDetail.getQuantity() + quantity;
            long newSubtotal = newQuantity * inventory.getSalePrice();
            invoiceDetail.setQuantity(newQuantity);
            invoiceDetail.setPrice(newSubtotal);
        }

        invoiceDetailRepository.save(invoiceDetail);
    }

    public void addService(long invoiceId, long serviceId) {
        Invoice invoice = invoiceRepository.findById(invoiceId);
        application.entity.Service service = serviceRepository.findById(serviceId);

        InvoiceDetail invoiceDetail = new InvoiceDetail(invoice, service);

        invoiceDetailRepository.save(invoiceDetail);
    }

    private boolean exists(long invoice, long product) {
        return invoiceDetailRepository.existsByInvoiceIdAndProductId(invoice, product);
    }

    public long getInvoiceTotal(List<InvoiceDetail> items) {
        long total = 0;

        for (InvoiceDetail item:items) {
            total += item.getPrice();
        }

        return total;
    }
}
