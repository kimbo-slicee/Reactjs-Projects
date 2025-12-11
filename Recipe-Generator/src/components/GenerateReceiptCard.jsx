export default function GenerateReceiptCard({handleClick}) {
    return (
        <article className="max-w-xl mx-auto p-6 bg-primary rounded-lg shadow-md mt-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-primary">
                Generate Receipt
            </h2>
            <button
                className="bg-secondary text-secondary py-2 px-4 cursor-pointer rounded-md hover:btn-hover font-medium"
                onClick={()=>handleClick()}
            >
                Generate Receipt
            </button>
        </article>
    )
}