import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('api') // Ruta base
export class AppController {
  @Get('items') // GET /api/items
  getItems() {
    return [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ];
  }

  @Post('items') // POST /api/items
  createItem(@Body() item: any) {
    return { success: true, item };
  }
}