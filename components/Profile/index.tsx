import Image from "next/image";

export default function Profile() {
  return (
    <article className="flex flex-col items-center gap-1">
      <div className="h-[250px] w-[250px] overflow-hidden rounded-full">
        <Image
          src="/profile.jpg"
          alt="profile"
          width={250}
          height={300}
          priority
        />
      </div>
      <h1 className="mt-2 text-2xl font-bold">안녕하세요.</h1>
      <h2 className="text-lg font-semibold">프론트엔드 개발자</h2>
      <h3>개발관련 의문을 추적하고 공유하는 사람입니다.</h3>
      <button className="fon-bold mt-2 flex items-center justify-center rounded-xl bg-main-blue px-4 py-1 text-white hover:bg-blue-button-hover">
        Contact Me
      </button>
    </article>
  );
}
