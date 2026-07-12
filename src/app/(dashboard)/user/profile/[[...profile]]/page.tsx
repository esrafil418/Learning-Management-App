import { UserProfile } from "@clerk/nextjs";
import Header from "@/components/Header";
import { dark } from "@clerk/themes";

export default function UserProfilePage() {
	return (
		<>
			<Header title="Profile" subtitle="View your Profile" />
			<UserProfile
				path="/user/profile"
				routing="path"
				appearance={{
					baseTheme: dark,
					elements: {
						scrollBox: "bg-customgreys-darkGrey",
						navbar: {
							"& > div:nth-child(1)": {
								background: "none",
							},
						},
					},
				}}
			/>
		</>
	);
}
