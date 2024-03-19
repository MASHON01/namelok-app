import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF5cWWZCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWX5fcXVSRmheVkF0W0c=');

ReactDOM.render(
    <React.StrictMode>
        <ContextProvider>
        <App />
    </ContextProvider>
    </React.StrictMode>,
    
    document.getElementById('root'));

