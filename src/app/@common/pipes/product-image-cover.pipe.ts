import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'productCoverImage' })
export class ProductCoverImageRPipe implements PipeTransform {
  transform(product: any): any {
    const size = '165x165';

    if (product && product.cover && !product.cover.startsWith('http')) {
      // v2
      return `https://cdn.mombiestreet.com/${size}/products/${product.id}/${product.cover}`;
    } else if (product && product.cover && product.cover.startsWith('http')) {
      // v1
      return product.cover.replace(
        'https://s3-ap-southeast-1.amazonaws.com/mombiestreet-upload/products/',
        `https://cdn.mombiestreet.com/${size}/products/`
      );
    }
  }
}
