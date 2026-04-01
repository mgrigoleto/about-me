import { Share_Tech } from "next/font/google";
import './Title.css'

export const shareTech = Share_Tech({
    subsets: ["latin"],
    weight: "400",
});

export default function Title(props: { text?: string }) {
    return (
        <h1 className={`${shareTech.className} container-title`}>
            _{props.text}
        </h1>
    )
}