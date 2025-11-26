import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError();

  let title = 'Something went wrong';
  let description = 'An unexpected error occurred while loading this view.';

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;
    description = error.data?.message ?? description;
  } else if (error instanceof Error) {
    description = error.message;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-white">
      <div className="max-w-md space-y-3 border border-white/10 bg-white/5 p-8 text-center shadow-lg">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
}
