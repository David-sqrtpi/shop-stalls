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
    private InvoiceDetailRepository invoiceDetailRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ServiceRepository serviceRepository;

    public void addInvoiceDetail(InvoiceDetail invoiceDetail) {
        Invoice invoice = invoiceRepository.findById(invoiceDetail.getInvoice().getId());
        if (invoiceDetail.getProduct() != null) {
            addProductDetail(invoiceDetail);
        }
        else  {
            addServiceDetail(invoiceDetail);
        }
        invoiceDetailRepository.save(invoiceDetail);
        invoice.setTotal(invoiceDetail.getPrice() + invoice.getTotal());
        invoiceRepository.save(invoice);
    }

    private void addProductDetail(InvoiceDetail invoiceDetail) {
        Product product = productRepository.findByCompanyIdAndBarcode(invoiceDetail.getProduct().getCompany().getId(),
                invoiceDetail.getProduct().getBarcode());
        invoiceDetail.getProduct().setId(product.getId());
    }

    private void addServiceDetail(InvoiceDetail invoiceDetail) {
        application.entity.Service service = serviceRepository.findByCompanyIdAndCode(invoiceDetail.getService().getCompany().getId(),
                invoiceDetail.getService().getCode());
        invoiceDetail.getService().setId(service.getId());
    }
}