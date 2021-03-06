import isEmpty from "just-is-empty";
import Link from "next/link";
import React, { useState } from "react";
import getMovie from "../../../api/getMovie";

export default function SingleMovie({ movie }) {
	return (
		<>
			<div className="banner pt-48 relative">
				<Link href="/">
					<a className="close-btn left-5 md:left-36 top-5 cursor-pointer z-50 text-gray-100 bg-gray-500 absolute p-1 rounded-full">
						<svg
							className="w-4 h-4 "
							xmlns="http://www.w3.org/2000/svg"
							fill="#fff"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</a>
				</Link>
				<div className="banner-overlay absolute w-full h-full top-0 left-0" />
				<div className="relative mt-24 md:mt-0 w-full mx-4 md:w-4/5 left md:mx-auto flex items-center justify-between">
					<img
						className="poster absolute -bottom-10 left-0  rounded overflow-hidden"
						src={movie.Poster}
						alt=""
					/>
					<div className="metadata ml-40 md:ml-44">
						<div className="hidden md:block">
							<p className="text-white">
								<span className="text-4xl md:text-5xl  font-bold">{movie.Title}</span>
							</p>
							{movie.Director && (
								<p className="text-white text-sm mb-4">Directed by - {movie.Director}</p>
							)}
						</div>
						<div className="hidden md:block">
							<div className="md:w-3/4 w-full flex gap-x-2 relative text-white text-xs md:text-sm my-6 whitespace-nowrap divide-x divide-gray-200">
								{movie.Runtime && <p className="time">{movie.Runtime}</p>}
								{movie.Genre && (
									<p className="genre pl-2">{movie.Genre.split(",").slice(0, 3).join(", ")}</p>
								)}
								{movie.Language && (
									<p className="language pl-2">
										{movie.Language.split(",").slice(0, 3).join(", ")}
									</p>
								)}
							</div>
						</div>
					</div>
					<div className="hidden md:block">
						<div className="rating flex">
							{movie.Ratings &&
								movie.Ratings.length > 0 &&
								movie.Ratings.slice(0, 2).map((item) => (
									<span
										key={item.Value}
										className="p-2 text-yellow-400 font-normal inline-block border border-gray-400">
										<p className="text-xl font-bold">{item.Value}</p>
										<p className="text-sm">
											{item.Source === "Internet Movie Database" ? "IMDB" : item.Source}
										</p>
									</span>
								))}
						</div>
					</div>
				</div>
			</div>
			<div className="pt-16 md:pt-24 bg-gray-200">
				<div className="block boxed md:hidden">
					<p className="text-gray-800">
						<span className="text-4xl md:text-5xl  font-bold">{movie.Title}</span>
					</p>
					{movie.Director && (
						<p className="text-gray-600 text-sm mb-4">Directed by - {movie.Director}</p>
					)}
				</div>
				<div className="block boxed md:hidden">
					<div className="rating flex">
						{movie.Ratings &&
							movie.Ratings.length > 0 &&
							movie.Ratings.slice(0, 2).map((item) => (
								<span
									key={item.Value}
									className="p-2 text-indigo-600 font-normal inline-block mr-5 bg-indigo-200 rounded">
									<p className="text-xl font-bold">{item.Value}</p>
									<p className="text-sm">
										{item.Source === "Internet Movie Database" ? "IMDB" : item.Source}
									</p>
								</span>
							))}
					</div>
				</div>
				<div className="block boxed md:hidden">
					<div className=" md:w-3/4 w-full flex gap-x-2 relative text-black text-xs md:text-sm my-6 whitespace-nowrap divide-x divide-gray-900">
						{movie.Runtime && <p className="time">{movie.Runtime}</p>}
						{movie.Genre && (
							<p className="genre pl-2">{movie.Genre.split(",").slice(0, 3).join(", ")}</p>
						)}
						{movie.Language && (
							<p className="language pl-2">{movie.Language.split(",").slice(0, 3).join(", ")}</p>
						)}
					</div>
				</div>
				<div className="boxed flex flex-col md:flex-row pb-10">
					<p className="font-bold text-2xl text-gray-700">Plot:</p>
					<p className="leading-relaxed pt-1 md:ml-24 font-medium text-gray-800">{movie.Plot}</p>
				</div>
				<div className="bg-gray-100 py-10">
					<div className="boxed flex flex-col md:flex-row">
						<p className="font-bold text-2xl text-gray-700">Crew:</p>
						<div className="grid md:ml-20 grid-cols-2 md:grid-cols-3 w-full gap-10">
							{movie.Actors.split(",").map((item) => (
								<div key={item} className="actore">
									<p className="font-medium text-gray-400">Actor</p>
									<p className="font-bold text-gray-700">{item}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
