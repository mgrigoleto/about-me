import { Share_Tech } from "next/font/google";
import { assemble } from "../../../assemble"
import './Title.css'

export const shareTech = Share_Tech({
    subsets: ["latin"],
    weight: "400",
});

export default function Title(props: { text?: string }) {
    return (
        <h1 className={`${shareTech.className} container-title`} {...assemble()}>
            <span>{props.text}</span>
        </h1>
    )
}