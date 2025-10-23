// src/components/ShareButtons.jsx
import React, { useState } from 'react';
import { FaQrcode } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import QrModal from './QrModal.jsx';

export default function ShareButtons({ url }) {
   const [showQr, setShowQr] = useState(false);

   const customTitle = 'ErikMann 🎤';
   const shareText = `LinkTree de ${customTitle} : ${url}`;
   const shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

   return (
      <>
         <div className="flex justify-center gap-4 mt-8">
            <a
               href={shareUrl}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-primary hover:bg-primary/70 text-white p-3 rounded-full shadow-md transition"
               aria-label="Compartir"
            >
               <FiShare2 className="w-6 h-6" />
            </a>

            <button
               onClick={() => setShowQr(true)}
               className="bg-primary hover:bg-primary/70 text-white p-3 rounded-full shadow-md transition"
               aria-label="Mostrar QR"
            >
               <FaQrcode className="w-6 h-6" />
            </button>
         </div>

         {showQr && <QrModal url={url} onClose={() => setShowQr(false)} />}
      </>
   );
}
