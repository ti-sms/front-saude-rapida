// hooks/useToast.ts
import { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { ToastMessage } from 'primereact/toast';

/**
 * Custom hook to simplify the use of PrimeReact Toast.
 */
export const useToast = () => {
    const toastRef = useRef<Toast>(null);

    const showToast = (message: ToastMessage | ToastMessage[]) => {
        if (toastRef.current) {
            toastRef.current.show(message);
        }
    };

    return { toastRef, showToast };
};