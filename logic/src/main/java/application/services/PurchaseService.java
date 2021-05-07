package application.services;

import application.Repository.ProductRepository;
import application.Repository.PurchaseDetailRepository;
import application.Repository.PurchaseRepository;

import application.entity.Product;
import application.entity.Purchase;
import application.entity.PurchaseDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PurchaseService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private PurchaseRepository purchaseRepository;

    @Autowired
    private PurchaseDetailRepository purchaseDetailRepository;

    public void buyProduct(long purchaseId, long productId, int quantity) {
        Purchase purchase = purchaseRepository.findById(purchaseId);
        Product product = productRepository.findById(productId);
        PurchaseDetail purchaseDetail;

        if (!exists(purchaseId, productId)) {
            purchaseDetail = new PurchaseDetail(purchase, product, quantity);
        } else {
            purchaseDetail = purchaseDetailRepository.findByPurchaseIdAndProductId(purchaseId, productId);
            int newQuantity = purchaseDetail.getQuantity() + quantity;
            long newSubtotal = newQuantity * product.getPrice();
            purchaseDetail.setQuantity(newQuantity);
            purchaseDetail.setSubtotal(newSubtotal);
        }

        purchaseDetailRepository.save(purchaseDetail);
    }

    private boolean exists(long purchase, long product) {
        return purchaseDetailRepository.existsByPurchaseIdAndProductId(purchase, product);
    }
}
