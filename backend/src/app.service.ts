import { Injectable } from '@nestjs/common';
import { Routes } from './routes';

@Injectable()
export class AppService {
  private readonly routes: Routes = [
    {
      title: 'SP -> Jundiaí',
      startPosition: {latitude: '-23.1895253', longitude: '-46.9767407'},
      endPosition: {latitude: '-23.6815315', longitude: '-46.8754829'},
    },
    {
      title: 'Jundiaí -> SP',
      startPosition: {latitude: '-23.6815315', longitude: '-46.8754829'},
      endPosition: {latitude: '-23.1895253', longitude: '-46.9767407'},
    },
    {
      title: 'Campinas -> Ribeirão Preto',
      startPosition: {latitude: '-22.8948443', longitude: '-47.1711183'},
      endPosition: {latitude: '-21.1794579', longitude: '-47.872626'},
    },
    {
      title: 'Oiapoque -> Chuí',
      startPosition: {latitude: '3.8400342', longitude: '-51.8463441'},
      endPosition: {latitude: '-33.6859293', longitude: '-53.4654995'},
    },
    {
      title: 'Las Vegas -> New York',
      startPosition: {latitude: '36.1246738', longitude: '-115.4551869'},
      endPosition: {latitude: '40.6976637', longitude: '-74.119764'},
    },
  ];

  getRoutes() {
    return this.routes;
  }
}
