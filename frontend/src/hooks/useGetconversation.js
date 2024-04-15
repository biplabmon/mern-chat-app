import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetconversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    getConversation();
  }, []);

  const getConversation = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setConversation(data);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, conversation };
};

export default useGetconversation;
