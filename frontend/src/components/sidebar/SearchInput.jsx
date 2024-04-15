import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetconversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversation } = useGetConversation();

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search must be at least 3 characters");
    }

    const conversations = conversation.find((c) =>
      c.fullName.toLowerCase().includes(search.toLocaleLowerCase())
    );

    if (conversations) {
      setSelectedConversation(conversations);
      setSearch("");
    } else toast.error("No user found!");
  };
  return (
    <form onSubmit={handelSubmit} className=" flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className=" input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className=" btn btn-circle bg-sky-500">
        <IoSearchSharp className=" w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
