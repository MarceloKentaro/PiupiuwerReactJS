import React from 'react';

import {AuthProvider} from './useAuth';

const WebProvider: React.FC = ({children}) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export default WebProvider;