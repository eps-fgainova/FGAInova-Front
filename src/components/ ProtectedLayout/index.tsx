import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth, AuthContextType } from '../../context/AuthContext';

interface ProtectedLayoutProps {
    children: ReactNode;
}

export const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
    const { isAuthenticate } = useAuth() as AuthContextType;
    const location = useLocation();

    if (!isAuthenticate) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};
