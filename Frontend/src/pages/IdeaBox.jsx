/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Alert, Space, Modal } from "antd";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import SignupService from "../services/signup.service";

export default function IdeaBox({ data }) {
  const [liked, setLiked] = useState(false);
  function toggleFav() {
    setLiked((prev) => !prev);
  }
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  function handleComment(event) {
    event.preventDefault();
    console.log("You clicked the button");
    setComment(event.target.value);
    console.log("com", comment);
    setOpen(false);
  }
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const [comment, setComment] = useState("");
  const [apply, setApply] = useState(false);

  function change(event) {
    event.preventDefault();
    setComment(event.target.value);
  }
  function toggleComment() {
    setApply((prev) => !prev);
    sendRequest();
  }
  function sendRequest() {
    console.log("Request sent");
  }
  // eslint-disable-next-line react/prop-types
  // console.log(data[0].user.username);
  console.log(data);

  return (
    <>
      {data &&
        Array.isArray(data) &&
        data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col m-5 pt-2.5 bg-white rounded max-w-[850px]"
          >
            <div className="flex items-center gap-2">
              <div className="avatar mx-2 mb-2">
                <div className="w-12 rounded">
                  <img
                    src={`http://127.0.0.1:8000/${item.user.profile.image}`}
                    alt="Tailwind-CSS-Avatar-component"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-0">
                <div
                  className="text-black text-center font-semibold"
                  style={{ fontFamily: "Adamina" }}
                >
                  {item.user.username}
                </div>
                <div
                  className="text-xs text-gray-500"
                  style={{ fontFamily: "Adamina" }}
                >
                  position
                </div>
              </div>
            </div>
            <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
            <div className="p-5" style={{ fontFamily: "Adamina" }}>
              {item.feed.feedText}
            </div>
            {item.user.image != null ? (
              <div className="border border-solid border-zinc-100">
                <img
                  src="../src/assets/img.jpg"
                  alt=""
                  className="h-auto max-w-lg rounded-lg w-full m-auto"
                />
              </div>
            ) : (
              " "
            )}
            <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
            <div className=" flex gap-16 m-5">
              {liked ? (
                <FavoriteOutlinedIcon
                  sx={{ color: "red" }}
                  onClick={toggleFav}
                />
              ) : (
                <FavoriteBorderOutlinedIcon onClick={toggleFav} />
              )}

              <TextsmsOutlinedIcon onClick={showModal} />
              <Modal
                title="Comment"
                style={{ display: "flex", alignItems: "center", width: "100%" }}
                open={open}
                onOk={handleComment}
                onCancel={handleCancel}
              >
                <textarea
                  type="text"
                  className="py-4 w-full border rounded resize-none bg-slate-100 p-2 "
                  rows="2"
                  style={{ width: "600px" }}
                  placeholder="comment..."
                  value={comment}
                  onChange={change}
                />{" "}
              </Modal>
              <PersonAddAlt1OutlinedIcon onClick={toggleComment} />
              {apply ? (
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Alert
                    message="Successful!"
                    description={`You have requested to join ${item.user.username}'s team`}
                    type="success"
                    banner
                    closable
                  />
                </Space>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
     
    </>
  );
}
