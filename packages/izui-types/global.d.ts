type JSONValue = string | number | boolean | null | object | JSONValue[];

type KeyOf<T> = keyof T;
type ValueOf<T> = T[keyof T];
type Nullable<T> = T | null;
type Optional<T> = T | undefined;

type BoundingBox = Point & Size;

type Rectangle = {
	top: number,
	left: number,
	bottom: number,
	right: number
};

type Point = {
	x: number,
	y: number
};

type Size = {
	width: number,
	height: number
};

type Icon = {
	src: string,
	name: string
};
