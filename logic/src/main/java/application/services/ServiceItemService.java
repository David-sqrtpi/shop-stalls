package application.services;

import application.Repository.InvoiceDetailRepository;
import application.Repository.InvoiceRepository;
import application.Repository.ServiceRepository;
import application.entity.Invoice;
import application.entity.InvoiceDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceItemService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private InvoiceDetailRepository invoiceDetailRepository;

    public void create(long invoiceId, long serviceId, int quantity) {

        Invoice invoice = invoiceRepository.findById(invoiceId);
        application.entity.Service service = serviceRepository.findById(serviceId);

        InvoiceDetail serviceItem = new InvoiceDetail(invoice, service);

        invoiceDetailRepository.save(serviceItem);
    }

}
