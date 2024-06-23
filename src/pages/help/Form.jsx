function Form() {
  return (
    <>
      <h2 className="w-full text-center mb-4 font-medium">Sen Us Questions</h2>
      <hr className="bg-black h-[2px]" />
      <div className="w-full max-w-[300px] mx-auto pt-5">
        <form>
          <label className="block mb-4">
            <span className="block mb-4">Your Email: </span>
            <input
              className="py-5 text-xl border px-3 font-serif w-full resize-none size-5"
              type="text"
            />
          </label>
          <label className="block mb-4">
            <span className="block mb-4">Email: </span>
            <textarea className="text-xl px-3 font-serif w-full border pb-20 resize-none size-5"></textarea>
          </label>
          <button className="bg-[#848484] border-none rounded-md py-2 px-4 text-white cursor-pointer block w-full hover:bg-[848484d2]">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
