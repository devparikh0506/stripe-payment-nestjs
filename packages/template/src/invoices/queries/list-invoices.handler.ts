import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Invoice } from '../entities/invoice.entity';
import { ListInvoicesQuery } from './list-invoices.query';

export interface InvoiceList {
  data: Invoice[];
  total: number;
  page: number;
  limit: number;
}

@QueryHandler(ListInvoicesQuery)
export class ListInvoicesHandler implements IQueryHandler<ListInvoicesQuery> {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoices: Repository<Invoice>,
  ) {}

  async execute(query: ListInvoicesQuery): Promise<InvoiceList> {
    const { customerId, page, limit } = query;
    const [data, total] = await this.invoices.findAndCount({
      where: customerId ? { customerId } : {},
      order: { createdAt: 'DESC' },
      skip: (page - 1) * limit,
      take: limit,
    });
    return { data, total, page, limit };
  }
}
