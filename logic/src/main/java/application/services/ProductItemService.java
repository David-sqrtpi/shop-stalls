package application.services;

import application.Repository.InvoiceDetailRepository;
import application.Repository.InvoiceRepository;
import application.Repository.ProductRepository;
import application.entity.Invoice;
import application.entity.InvoiceDetail;
import application.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductItemService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private InvoiceDetailRepository invoiceDetailRepository;

    public void create(long invoiceId, long productSku, int quantity) {
        Invoice invoice = invoiceRepository.findById(invoiceId);
        Product product = productRepository.findById(productSku);

        InvoiceDetail productItem = new InvoiceDetail(invoice, product, quantity);

        invoiceDetailRepository.save(productItem);
    }

}
