package application.services;

import application.Repository.InvoiceRepository;
import application.Repository.ProductItemRepository;
import application.Repository.ProductRepository;
import application.models.Invoice;
import application.models.Product;
import application.models.ProductItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductItemService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductItemRepository productItemRepository;

    public void create(long invoiceId, long productSku, int quantity) {
        Invoice invoice = invoiceRepository.findById(invoiceId);
        Product product = productRepository.findBySku(productSku);

        ProductItem productItem = new ProductItem(invoice, product, quantity);

        productItemRepository.save(productItem);
    }

}
