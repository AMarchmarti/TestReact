import * as React from 'react';

interface useFetchProps {
	getterAll: () => Promise<any[]>;
	normalizeData: (data: any[]) => any;
	setLoading: (value: boolean) => void;
	params?: number;
}

const useFetchData = ({ getterAll, normalizeData, setLoading, params }: useFetchProps) => {
	const [state, setState] = React.useState();

	const fetchData = async () => {
		const data: any[] = await getterAll();
		setState(await normalizeData(data));
	};

	React.useEffect(() => {
		(async (): Promise<void> => {
			setLoading(true);

			await fetchData();

			setLoading(false);
		})();
	}, [params]);

	return state;
};

export default useFetchData;
