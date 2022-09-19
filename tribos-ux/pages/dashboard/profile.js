// Layout
import DashboardLayout from "../../components/DashboardLayout";

export default function ProfilePage() {
  return <h1>Olá</h1>;
}

ProfilePage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
