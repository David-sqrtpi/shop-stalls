package application.services;

import application.Repository.InvoiceRepository;
import application.Repository.ServiceItemRepository;
import application.Repository.ServiceRepository;
import application.models.Invoice;
import application.models.ServiceItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceItemService {

    @Autowired
    private InvoiceRepository invoiceRepository;

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private ServiceItemRepository serviceItemRepository;

    public void create(long invoiceId, long serviceId, int quantity) {

        Invoice invoice = invoiceRepository.findById(invoiceId);
        application.models.Service service = serviceRepository.findById(serviceId);

        ServiceItem serviceItem = new ServiceItem(invoice, service, quantity);

        serviceItemRepository.save(serviceItem);
    }

}
