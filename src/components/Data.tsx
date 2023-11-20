import img1 from '../images/tour-1.jpg';
import img2 from '../images/tour-2.jpg';
import img3 from '../images/tour-3.jpg';
import img4 from '../images/tour-4.jpg';
import img5 from '../images/tour-5.jpg';
import img6 from '../images/tour-6.jpg';
import img7 from '../images/tour-7.jpg';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export const tours = [
  {
    name: 'Kenya Highlights',
    date: 'December 5th, 2019',
    img: img1,
    location: 'Kenya',
    cost: '2400',
    duration: '14',
    text: 'Explore the breathtaking landscapes of Kenya, from the vast savannas of the Maasai Mara to the stunning Great Rift Valley.',
  },
  {
    name: 'Tibet',
    date: 'January 15th, 2020',
    img: img2,
    location: 'China',
    cost: '1500',
    duration: '7',
    text: 'Immerse yourself in the rich cultural tapestry of Tibet, where ancient monasteries, serene lakes, and majestic mountain ranges create an otherworldly experience.',
  },
  {
    name: 'Best of Jakarta',
    date: 'February 5th, 2021',
    img: img3,
    location: 'Indonesia',
    cost: '4000',
    duration: '12',
    text: 'Discover the vibrant and diverse city of Jakarta, where modern skyscrapers stand alongside historical landmarks, offering a dynamic blend of tradition and contemporary life.',
  },

  {
    name: 'Sky Scrapers of Hongkong',
    date: 'July 5th, 2020',
    img: img4,
    location: 'China',
    cost: '4400',
    duration: '14',
    text: 'Marvel at the iconic skyline of Hong Kong, where glittering skyscrapers punctuate the cityscape, creating a dazzling panorama against the backdrop of Victoria Harbour.',
  },
  {
    name: 'Paradise of Persepolice',
    date: 'February 15th, 2020',
    img: img5,
    location: 'Iran',
    cost: '6000',
    duration: '8',
    text: 'Step back in time and wander through the ancient ruins of Persepolis, where grand palaces and intricate carvings narrate the rich history of the Persian Empire.',
  },
  {
    name: 'Paris City of Love',
    date: 'August 5th, 2021',
    img: img6,
    location: 'France',
    cost: '2400',
    duration: '11',
    text: 'Experience the romantic allure of Paris, where charming cobblestone streets, iconic landmarks like the Eiffel Tower, and the Seine River create an enchanting atmosphere.',
  },
  {
    name: 'Taj Mahal',
    date: 'December 5th, 2019',
    img: img7,
    location: 'India',
    cost: '1600',
    duration: '5',
    text: 'Behold the timeless beauty of the Taj Mahal, an architectural masterpiece that stands as a testament to eternal love and exquisite craftsmanship in the heart of India.',
  },
];

export const navItems = [
  { id: 1, name: 'home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Services', href: '#services' },
  { id: 4, name: 'Tours', href: '#tours' },
];

export const icons = [
  { id: 1, href: 'https://twitter.com', icon: <FaTwitter /> },
  { id: 2, href: 'https://facebook.com', icon: <FaFacebook /> },
  { id: 3, href: 'https://instagram.com', icon: <FaInstagram /> },
];

export const readmoreText = `Dive into the enchanting tapestry of cultures and landscapes as ourtours unveil the subtle nuances that set each destination apart.
Immerse yourself in the rich history, savor distinctive flavors, and
witness the unique charm that defines each journey. Explore the
difference in every adventure, where every step tells a story and
every moment paints a vivid picture of the diverse world waiting to
be discovered. Dive into the enchanting tapestry of cultures and landscapes as ourtours unveil the subtle nuances that set each destination apart.
Immerse yourself in the rich history, savor distinctive flavors, and
witness the unique charm that defines each journey. Explore the
difference in every adventure, Dive into the enchanting tapestry of cultures and landscapes as ourtours unveil the subtle nuances that set each destination apart.
Immerse yourself in the rich history,where every step tells a story and
every moment paints a vivid picture of the diverse world waiting to
be discovered. `;
