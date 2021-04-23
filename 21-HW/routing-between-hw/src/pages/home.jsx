import { PageHeader } from "../components/page-header";

export default function Home() {
    return (
      <>
        <PageHeader className="home">Home</PageHeader>
        <img className="homeImage"
              src={"https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"}
              alt={"HomepageImg"}
            />
      </>
    )
  }