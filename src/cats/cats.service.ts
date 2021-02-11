import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import * as fs from 'fs';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  private readonly a: any = fs.readFile(
    'data/test.json',
    'utf-8',
    function (err: any, data: any) {
      if (err) {
        console.error(err);
        return null;
      } else {
        console.info(data);
        return data;
      }
    },
  );

  create(cat: Cat) {
    this.cats.push(cat);
  }

  async findAll(): Promise<any> {
    const a = fs.readFileSync('data/cats.json');
    console.info(JSON.parse(a.toString()));
    return JSON.parse(a.toString()); // this.data
  }
}
