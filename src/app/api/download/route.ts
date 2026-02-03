import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const blobUrl = process.env.CV_BLOB_URL;
		
		if (!blobUrl) {
			return NextResponse.json(
				{ error: 'CV URL not configured' },
				{ status: 500 }
			);
		}
		
		const response = await fetch(blobUrl);
		
		if (!response.ok) {
			throw new Error('Failed to fetch CV');
		}
		
		const blob = await response.blob();
		
		return new NextResponse(blob, {
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': 'attachment; filename="Paniello-Castillo-B_CV.pdf"',
			},
		});
	} catch (error) {
		console.error('Download failed:', error);
		return NextResponse.json(
			{ error: 'Failed to download CV' },
			{ status: 500 }
		);
	}
}