const app = Vue.createApp({
  data() {
      return {
          productName: 'BOOK A CRUISE TO THE MOON',
          productDescription: 'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
          
          productImage: 'assets/tothemoon.webp',
          productImageDescription: 'Comfort, space, and luxury on the moon.',
          productImageStyle: {
              'border-radius': '15px'
          }

      }
  }
});