import Image from 'next/image';
import FooterOption from './FooterOption';

function Footer({ scrollToTop }) {
  return (
    <div>
      {/* Button */}
      <button
        onClick={() => scrollToTop()}
        className='text-center w-full text-white text-sm bg-amazon_blue-smoke py-3 mt-20 '>
        Back to Top
      </button>

      <div className='px-60 pt-10 bg-amazon_blue-light'>
        <div className='grid grid-cols-4 gap-20 pb-8 border-b border-gray-200'>
          <div className='px-2 space-y-2 text-white'>
            <h3 className='font-bold'>Get Know Us</h3>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Careers
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              About Us
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              UK Mordern Slavery Statement
            </p>
          </div>

          <div className='px-2 space-y-2 text-white'>
            <h3 className='font-bold'>Make Money with Us</h3>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Sell on Amazon
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Sell Amazon Business
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Sell on Amazon Handmade
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Sell on Amazon Launchpad
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Associates Programme
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Fulfilment by Amazon
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Seller Fulfilled Prime
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Advertise Your Products
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Independently Publish with Us
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Amazon Pay
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Host an Amazon Hub
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              › See all
            </p>
          </div>
          <div className='px-2 space-y-2 text-white'>
            <h3 className='font-bold'>Amazon Payment Methods</h3>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Amazon Platinum Mastercard
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Amazon Classic Mastercard
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Amazon Money Store
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Gift Cards
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Amazon Currency Converter
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Payment Methods Help
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Shop with Points
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Top Up Your Account
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Top Up Your Account in Store
            </p>
          </div>

          <div className='px-2 space-y-2 text-white'>
            <h3 className='font-bold'>Let Us Help You</h3>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              COVID-19 and Amazon
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Track Packages or View Orders
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Delivery Rates & Policies
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Returns & Replacements
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Recycling
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Manage Your Content and Devices
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Amazon Mobile App
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Amazon Assistant
            </p>
            <p className='text-sm text-gray-300 hover:underline cursor-pointer'>
              Customer Service
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col mx-auto bg-amazon_blue-light pt-4 pb-12'>
        <Image
          src={
            'https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png'
          }
          height={68}
          width={125}
          objectFit='contain'
        />

        <div className='flex justify-center space-x-2 text-xs font-medium text-white'>
          <p>Australia</p>
          <p>Brasil</p>
          <p>Canada</p>
          <p>China</p>
          <p>France</p>
          <p>Germany</p>
          <p>India</p>
          <p>Italy</p>
          <p>Japan</p>
          <p>Mexico</p>
          <p>Netherlands</p>
          <p>Poland</p>
          <p>Singapore</p>
          <p>Spain</p>
          <p>Turkey</p>
          <p>United Arab Emirates</p>
          <p>United States</p>
        </div>
      </div>

      <div className='flex justify-center px-60 py-8 bg-amazon_blue'>
        <div className='grid grid-cols-4'>
          <FooterOption name1='Amazon Music' name2='Strem millions of songs' />
          <FooterOption name1='AbeBooks' name2='Books, art & collectables' />
          <FooterOption name1='ACX' name2='Audiobook Publishing Made Easy' />
          <FooterOption
            name1='Amazon Web Services'
            name2='Scalable Cloud Computing Services'
          />

          <FooterOption name1='Audible' name2='Download Audiobooks' />
          <FooterOption
            name1='Book Depository'
            name2='Books With Free Delivery Worldwide'
          />
          <FooterOption name1='DPReview' name2='Digital Photography	' />
          <FooterOption
            name1='Goodreads'
            name2='Book reviews & recommendations'
          />

          <FooterOption
            name1='Amazon Home Services'
            name2='Experienced pros Happiness Guarantee'
          />
          <FooterOption name1='IMDb' name2='Movies, TV & Celebrities' />
          <FooterOption
            name1='Kindle Direct Publishing'
            name2='Indie Digital & Print Publishing Made Easy'
          />
          <FooterOption name1='Shopbop ' name2='Designer Fashion Brands' />

          <FooterOption
            name1='Amazon Warehouse'
            name2='Deep Discounts Open-Box Products	'
          />
          <FooterOption
            name1='Amazon Business'
            name2='Service for business customers'
          />
          <FooterOption
            name1='Whole Foods Market'
            name2='We Believe in Real Food'
          />
        </div>
      </div>

      <div className='flex space-x-4 pb-4 justify-center bg-amazon_blue'>
        <p className='text-xs hover:underline hover:decoration-gray-300 cursor-pointer text-gray-300'>
          Conditions of Use & Sale
        </p>
        <p className='text-xs hover:underline hover:decoration-gray-300 cursor-pointer text-gray-300'>
          Privacy Notice
        </p>
        <p className='text-xs hover:underline hover:decoration-gray-300 cursor-pointer text-gray-300'>
          Cookies Notice
        </p>
        <p className='text-xs hover:underline hover:decoration-gray-300 cursor-pointer text-gray-300'>
          Interest-Based Ads Notice
        </p>
        <p className='text-xs text-gray-300'>
          © 1996-2022, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
}

export default Footer;
