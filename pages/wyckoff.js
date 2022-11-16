// nextjs
import { useRouter } from 'next/router';
// my component
import MyHeader from "components/Header/MyHeader.js";
//img
import Footer from "../components/Footer/Footer";
import HeadingNews from "../components/_componentsWyckoff/HeadingNews";
import Page from '../components/_Page/Page';

function NewPage() {
    const router = useRouter();
    function handleHeaderCatgoriesClick(src) {
        router.push(src)
    }
    return (
        <Page title="wyckoff">
            {/* content newpage */}
            <div style={{ width: "1200px", minHeight: '100px', marginTop: "95px", marginLeft: "auto", marginRight: "auto", minHeight: "100px" }}>
                <HeadingNews />
            </div>
        </Page>
    );
}

export default NewPage;