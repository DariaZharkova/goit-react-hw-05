import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function NothFoundMessage() {
  useEffect(() => {
    toast.error(
      'Nothing was found for your search, please try to write another word!'
    );
  }, []);
}
