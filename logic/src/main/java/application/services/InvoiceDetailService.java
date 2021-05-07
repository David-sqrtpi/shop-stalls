package application.services;

import application.Repository.InvoiceDetailRepository;
import application.Repository.InvoiceRepository;
import application.Repository.ProductRepository;
import application.Repository.ServiceRepository;
import application.entity.Invoice;
import application.entity.InvoiceDetail;
import application.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InvoiceDetailService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private InvoiceDetailRepository invoiceDetailRepository;

    public void addProduct(long invoiceId, long productId, int quantity) {
        Invoice invoice = invoiceRepository.findById(invoiceId);
        Product product = productRepository.findById(productId);
        InvoiceDetail invoiceDetail;

        if (!exists(invoiceId, productId)) {
            invoiceDetail = new InvoiceDetail(invoice, product, quantity);
        } else {
            invoiceDetail = invoiceDetailRepository.findByInvoiceIdAndProductId(invoiceId, productId);
            int newQuantity = invoiceDetail.getQuantity() + quantity;
            long newSubtotal = newQuantity * product.getPrice();
            invoiceDetail.setQuantity(newQuantity);
            invoiceDetail.setSubtotal(newSubtotal);
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

}
