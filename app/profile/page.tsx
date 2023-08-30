/* eslint-disable @next/next/no-img-element */
import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";

const Profile = async () => {
  // получаем данные сессии для серверного компонента с помощью спец функции в которую прокидываем наш конфиг гугл авторизации
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && <img src={session.user.image} alt="" />}
    </div>
  );
};

export default Profile;
