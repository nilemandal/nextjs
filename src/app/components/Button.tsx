"use client";

export function UpVoteBtn(){
    return (
        <button onClick={() => {
            console.log("upVote clicked");
            alert("upVote clicked");
        }} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mt-4">
            upVote
        </button>
    );
};