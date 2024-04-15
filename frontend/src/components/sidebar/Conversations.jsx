import React from "react";
import Conversation from "./Conversation";
import useGetconversation from "../../hooks/useGetconversation";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
  const { loading, conversation } = useGetconversation();
  return (
    <div className=" flex flex-col py-2 overflow-auto">
      {conversation.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversation.length - 1}
        />
      ))}

      {loading ? (
        <span className=" loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
