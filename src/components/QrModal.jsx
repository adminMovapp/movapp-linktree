import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { siteConfig } from '@utils/infoSite.jsx';

const { logo } = siteConfig.assets;

export default function QrModal({ url, onClose }) {
   return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
         <div className="bg-white p-6 rounded-lg relative shadow-lg max-w-sm w-full">
            <button
               onClick={onClose}
               aria-label="Cerrar modal"
               className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
               ✕
            </button>

            <div className="flex flex-col items-center space-y-4">
               <QRCodeCanvas
                  value={url}
                  size={220}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  imageSettings={{
                     src: logo, // ruta accesible
                     height: 40, // ajusta a 40px o menos si no funciona
                     width: 40,
                     excavate: true, // muy importante para limpiar debajo del logo
                  }}
               />

               <p className="text-gray-800 text-sm">Escanea el QR para abrir LinkTree</p>
            </div>
         </div>
      </div>
   );
}
