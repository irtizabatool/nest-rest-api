import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '123456',
      name: 'Item one',
      description: 'this is first item',
      qty: 3,
    },
    {
      id: '456789',
      name: 'Item two',
      description: 'this is second item',
      qty: 2,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
