import { PageHeader } from "../components/page-header";

export default function NoPathFound() {
    return (
      <>
        <PageHeader className="home">Oops! 404</PageHeader>
        <img className="restricted"
              src={"https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
              alt={"NoPathFound"}
            />
      </>
    )
  }