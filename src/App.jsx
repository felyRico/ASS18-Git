import React, { useState } from 'react';

function ToggleName() {
  const [showName, setShowName] = useState(false);

  const handleClick = () => {
    setShowName(!showName);
  };

  return (
    <div>
      <button onClick={handleClick}>{showName ? 'Tampilkan' : 'Sembunyikan'}</button>
      {showName && <p>Nama: RICO</p>}
    </div>
  );
}

export default ToggleName;
