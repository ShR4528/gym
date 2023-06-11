import Logo from '@/assets/Logo.png'


/

// const containerStyle = {
//   width: '100%',
//   height: '300px',
// };

// const location = {
//   lat: 51.5074,
//   lng: -0.1278,
// };

// const mapOptions = {
//   zoom: 10,
//   center: location,
// };

// const Footer = () => {
//   return (
        //   <footer className='bg-primary-100 py-16'>
        // <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        //   <div className='mt-16 basis-1/2 md:mt-0'>
        //     <img alt='logo' src={Logo} />
        //     <p className='my-5'>
        //       Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
        //       purus et arcu massa dictum condimentum. Augue scelerisque iaculis
        //       orci ut habitant laoreet. Iaculis tristique.
        //     </p>
        //     <p>© Evogym All Rights Reserved.</p>
        //   </div>
        //   <div className='mt-16 basis-1/4 md:mt-0'>
        //     <h4 className='font-bold'>Links</h4>
        //     <p className='my-5'>Massa orci senectus</p>
        //     <p className='my-5'>Et gravida id et etiam</p>
        //     <p>Ullamcorper vivamus</p>
        //   </div>
        //   <div className='mt-16 basis-1/4 md:mt-0'>
        //     <h4 className='font-bold'>Contact Us</h4>
        //     <p className='my-5'>Tempus metus mattis risus volutpat egestas.</p>
        //     <p>(333)425-6825</p>
        //   </div>
        // </div>
   
//     <div className="bg-gray-100 py-6 flex flex-col md:flex-row">
//       <div className="container mx-auto px-4 md:flex-1">
//         {/* Адрес и контактная информация */}
//         <h3 className="text-xl font-bold mb-2">Контакты</h3>
//         <p>Адрес: 123 улица, Город</p>
//         <p>Телефон: 123-456-7890</p>
//       </div>
//       <div className="md:flex-1">
//         {/* Карта */}
//         <LoadScript googleMapsApiKey="YOUR_API_KEY">
//           <GoogleMap mapContainerStyle={containerStyle} options={mapOptions}>
//             <Marker position={location} />
//           </GoogleMap>
//         </LoadScript>
//       </div>
//       </div>
//       </footer>
//   );
// };

//export default Footer;



// const Footer = () => {
//     return (

//     );
//   };
  
//   export default Footer;
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const location = {
  lat: 51.5074,
  lng: -0.1278,
};

const mapOptions = {
  zoom: 10,
  center: location,
};

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img alt='logo' src={Logo} />
          <p className='my-5'>
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <LoadScript googleMapsApiKey="YOUR_API_KEY">
              <GoogleMap mapContainerStyle={containerStyle} options={mapOptions}>
                <Marker position={location} />
              </GoogleMap>
            </LoadScript>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        {/* <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Links</h4>
          <p className='my-5'>Massa orci senectus</p>
          <p className='my-5'>Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div> */}
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className='my-5'>Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        
          {/* <div className="mt-4">
            <h1>Hello</h1>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
