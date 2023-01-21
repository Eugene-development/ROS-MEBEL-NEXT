import Link from "next/link"

export default function Post(props) {
  return (
    <>
       <div  dangerouslySetInnerHTML={{ __html: props.text }} />
       {/* <div class="mt-8 inline-flex rounded-md shadow bg-gray-50">
            <Link href="/blog" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"> Вернуться в блог </Link>
        </div> */}
    </>
  )
}
