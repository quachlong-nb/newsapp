// nextjs
import { useRouter } from 'next/router';
// my component
import MyHeader from "components/Header/MyHeader.js";
import HeadingNews from "../components/_componentsNews/HeadingNews";
import Footer from "../components/Footer/Footer";
import Page from '../components/_Page/Page';
//img

function NewPage() {
    const router = useRouter();
    function handleHeaderCatgoriesClick(src) {
        router.push(src)
    }
    return (
        <Page title="tintuc">
            <div style={{ width: "1200px", minHeight: '100px', marginTop: "95px", marginLeft: "auto", marginRight: "auto", minHeight: "100px" }}>
                <HeadingNews />
            </div>
        </Page>
    );
}

export default NewPage;