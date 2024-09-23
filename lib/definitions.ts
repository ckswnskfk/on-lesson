export enum Role {
	STUDENT = "STUDENT",
	TEACHER = "TEACHER",
}

export type User = {
	id: string;
	nickname: string;
	email: string;
	role: Role;
};
