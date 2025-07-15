import Link from "next/link"

export const Header=()=>{
    return(
        <div>
            <header>
                <div className="flex h-17 justify-end gap-3 items-center">
                    <Link href="/">HOME</Link>
                    <Link href="/skill">SKILL</Link>
                    <Link href="/project">PROJECT</Link>
                    <Link href="/contact">CONTACT ME</Link>
                </div>

            </header>

        </div>
    )
}
