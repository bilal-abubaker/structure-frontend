import UserManagementList from './components/user-management/user-management-list';

export default async function UserPage({ searchParams }) {
  return <UserManagementList searchParams={await searchParams} />;
}
