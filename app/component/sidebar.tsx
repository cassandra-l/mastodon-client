export function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen pl-8 pt-20 pr-14 bg-[#F5F7F9]">
      <h2 className="mb-6 font-bold italic text-2xl">Menu</h2>
      <nav className="flex flex-col gap-4">
        <a className="flex pr-4 hover:bg-[#6366F1]/10 rounded py-2" href="/">
          Trending
        </a>
        <a className="flex pr-4 hover:bg-gray-100 rounded py-2">Search</a>
        <a className="flex pr-4 hover:bg-gray-100 rounded py-2">Messages</a>
        <a className="flex pr-4 hover:bg-gray-100 rounded py-2">
          Notifications
        </a>
        <a className="flex pr-4 hover:bg-gray-100 rounded py-2">Create</a>
        <a className="flex pr-4 hover:bg-gray-100 rounded py-2">Profile</a>
        <a
          className="flex pr-4 hover:bg-gray-100 rounded py-2"
          href="/settings"
        >
          Settings
        </a>
      </nav>
    </aside>
  );
}
