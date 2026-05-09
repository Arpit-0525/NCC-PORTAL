"use client";

import { useAuth } from "@/context/AuthContext";
import Leaderboard from "@/components/cadets/Leaderboard";
import DrillAnalysisCard from "@/components/performance/DrillAnalysisCard";

export default function PerformancePage() {
    const { user } = useAuth();

    const isAdmin = user.role === "admin";

    return (
        <div className="p-6 space-y-6 bg-gray-50 min-h-screen">

            {/* HEADER */}
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                    Performance Dashboard
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                    Monitor cadet performance and training activities
                </p>
            </div>

            {/* ===================== */}
            {/* CADET UI */}
            {/* ===================== */}

            {!isAdmin && (
                <div className="space-y-6">

                    {/* Physical */}
                    <div className="bg-white border rounded-2xl p-5 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Daily Physical Update
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Upload today's physical training proof
                        </p>

                        <input
                            type="file"
                            className="mt-4 block w-full text-sm"
                        />

                        <button className="btn btn-primary mt-4">
                            Submit Physical Proof
                        </button>
                    </div>

                    {/* Drill */}
                    <div className="bg-white border rounded-2xl p-5 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Drill Video Upload
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Upload fall-in drill practice video
                        </p>

                        <input
                            type="file"
                            accept="video/*"
                            className="mt-4 block w-full text-sm"
                        />

                        <button className="btn btn-primary mt-4">
                            Upload Drill Video
                        </button>
                        <DrillAnalysisCard />
                    </div>

                    {/* Theory */}
                    <div className="bg-white border rounded-2xl p-5 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Theory Quiz
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Attempt latest theory session quiz
                        </p>

                        <button className="btn btn-primary mt-4">
                            Start Quiz
                        </button>
                    </div>

                    {/* Social */}
                    <div className="bg-white border rounded-2xl p-5 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Social Activity Points
                        </h2>

                        <div className="mt-4 flex items-center justify-between">
                            <span className="text-gray-600">
                                Current Points
                            </span>

                            <span className="text-xl font-bold text-green-600">
                                85
                            </span>
                        </div>
                    </div>

                </div>
            )}

            {/* ===================== */}
            {/* ADMIN UI */}
            {/* ===================== */}

            {isAdmin && (
                <div className="space-y-6">

                    {/* Physical Reviews */}
                    <div className="bg-white border rounded-2xl p-5 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Pending Physical Verifications
                        </h2>

                        <div className="mt-4 space-y-3">

                            <div className="flex justify-between items-center border rounded-lg p-3">
                                <div>
                                    <p className="font-medium">Rahul Sharma</p>
                                    <p className="text-sm text-gray-500">
                                        Running session proof uploaded
                                    </p>
                                </div>

                                <button className="btn btn-primary">
                                    Verify
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Drill Review */}
                    <div className="bg-white border rounded-2xl p-5 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Drill Video Analysis
                        </h2>

                        <div className="mt-4 border rounded-lg p-4">

                            <p className="font-medium">
                                Aman Verma
                            </p>

                            <p className="text-sm text-gray-500 mt-1">
                                AI Drill Match Score
                            </p>

                            <div className="mt-3 w-full bg-gray-200 rounded-full h-3">
                                <div
                                    className="bg-blue-600 h-3 rounded-full"
                                    style={{ width: "82%" }}
                                />
                            </div>

                            <p className="text-sm text-gray-600 mt-2">
                                Match Accuracy: 82%
                            </p>

                        </div>
                    </div>

                    {/* Theory Analytics */}
                    <div className="bg-white border rounded-2xl p-5 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Theory Performance
                        </h2>

                        <div className="mt-4">

                            <div className="flex justify-between py-2 border-b">
                                <span>Quiz Average</span>
                                <span className="font-semibold">78%</span>
                            </div>

                            <div className="flex justify-between py-2">
                                <span>Highest Score</span>
                                <span className="font-semibold">96%</span>
                            </div>

                        </div>
                    </div>

                    {/* Social Points */}
                    <div className="bg-white border rounded-2xl p-5 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Social Activity Scoring
                        </h2>

                        <div className="mt-4 flex items-center gap-4">

                            <select className="border rounded-lg px-3 py-2">
                                <option>Rahul Sharma</option>
                            </select>

                            <input
                                type="number"
                                placeholder="Points"
                                className="border rounded-lg px-3 py-2"
                            />

                            <button className="btn btn-primary">
                                Assign
                            </button>

                        </div>
                    </div>
                    {/* LEADERBOARD */}
                    <Leaderboard />

                </div>

            )}

        </div>
    );
}